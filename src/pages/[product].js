import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Axios from 'axios';
import Icon from "../components/product/Icon";
import Market from "../components/product/Market";
import Star from "../components/product/Star";
import Sidebar from "../components/Sidebar";
import webp from 'check-for-webp';

import * as loadScript from "simple-load-script";
import "babel-polyfill";

import "../../static/css/product.css";


function Product(props) {
  const id = props.params.product;
  const [fruit, setFruit] = useState(JSON.stringify({foo: "bar", test: {example: "demo"}}));
  const [code, setCode] = useState("loading...");
  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [backImage, setBackImage] = useState('');
  const [modal, setModal] = useState(false);
  


  useEffect(() => {
    
    async function getToken() {
      const itemData = await Axios.get("https://api.kawa.app/api/catalog/item/"+id)
        .then((result) => {
          setItem(result.data.item)
        },(error) => {
          setItem("bad response")
        })
        .catch(err => {
          // 
        })
        const categoriesData = await Axios.get("https://api.kawa.app/api/catalog/categories")
        .then((result) => {
          setCategories(result.data.categories)
        },(error) => {
          setCategories("bad response")
        })
        .catch(err => {
          // 
        })
    }

    function backgroundUrl() {
      let width = 0
      width = window.outerWidth
      if (webp) {
        setBackImage ('/images/product_bg.webp');
      }
      else if (width > 1024 && process.client) {
        setBackImage ('/images/product_bg_big.png');
      }
      setBackImage ('/images/product_bg.png');
    }
    backgroundUrl();
    getToken();
  }, []);

  function showModal() {
      setModal(!modal)
    }

  function caption() {
      return (<>
        <span dangerouslySetInnerHTML={{__html: item.text}}></span><br/>
            <p>Вага: {item.weight} р.</p>
            {
              item.pid === '3' || item.pid === '4'
                ? '<p>Количество: {item.quantity} шт.</p>'
                : ''
            }
            <p>Упаковка: {item.package_human}.</p>
            <p>Країна виробник: {item.country_human}</p>
            {
              item.energy_value
                ? '<p>Энергетическая ценность: ' +
                  item.energy_value +
                  ' ккал.</p>'
                : ''
            }
            {
              item.proteins && item.fats && item.carbohydrates
                ? '<p>Питательная ценность:<br>&emsp;белки — {item.proteins} г.<br>&emsp;жиры — {item.fats} г.<br>&emsp;углеводы — {item.carbohydrates} г.</p>'
                : ''
            }
            {
              item.shelf_life
                ? '<p>Термін придатності: ' + item.shelf_life + ' міс.</p>'
                : ''
            }
            {(() => {
              if(item.shelf_life) {<hr/>} else {<hr/>}
            })()}
            {
              item.storage_conditions
                ? '<p>Условия хранения: ' +
                  item.storage_conditions +
                  '.</p>'
                : ''
            }
            </>);
    }

  return (
    <>
      <div onClick={showModal} className="container">
        <div className="row">
          <div style={{ backgroundImage: 'url('+backImage+')' }} className="col-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-5 col-xl-4 bg">
            <div className="wrapper">
              <div className="share-icon" onClick={() => setFruit({foo: "foobar6"})}>
                <Icon color="#302c23" size="25" icon="share" />
              </div>
              <img src={item.file} alt={item.name} className="img-fluid mx-auto image-product"
              />
              <div v-if="countImg > 1" className="dots">
                <div v-for="dot in countImg" key="dot" className="dot"></div>
              </div>
              <h1>{item.name}</h1>
              <div className="desctiption">
                
                {
                  categories.filter((category) => category.id === item.pid).length >
                  0
                    ? categories.filter((category) => category.id === item.pid)[0]
                        .name
                    : ''
                }
                {item.pid > 7 ? '': ', ' + item.sort_human + ' '}
                {item.arabic_percent ? item.arabic_percent + '%' : ''}
              </div>
              <div className="roast">
              { item.pid > 7 ? '' : `Обжарка ${item.roast_human}` }
              </div>
              <div className="code">Код товару: {item.code}</div>
              <div className="price">
                <span />
                {Math.floor( item.price )} грн
              </div>
              <div className="row no-gutters">
                <div className="col-5">
                  <client-only placeholder="Loading...">
                    <Star
                      star-half="true"
                      value="item.avg_rating"
                      disabled="true"
                      type="star"
                    />
                  </client-only>
                  <br />
                  Відгуків: {item.comments}
                </div>
                <div className="col-2 kawa-icon">
                  <Icon color="#48433b" icon="small-cart-in-catalog" size="30" />
                </div>
                <div className="col-5">
                  <div className="btnText">Купити зараз</div>
                </div>
              </div>
            </div>

            <div class="wrapper">
              <div class="accordion-header">
                Доставка і оплата
                <Icon color="#302c23" icon="arrow-next" size="14" />
              </div>
              <div class="accordion-header">
                Інші товари
                <Icon color="#302c23" icon="arrow-next" size="14" />
              </div>
              <div class="accordion-header open">
                Опис
                <Icon color="#302c23" icon="arrow-down" size="14" />
              </div>
              <div class="caption">
              {caption()}
              </div>
            </div>
            <div className="support">
              <div className="support-btn">
                <Icon icon="telephone" size="20px" color="#f8f8f8" />Виникли питання??
              </div>
            </div>
            {modal == true ? (<Market/>) : ('')}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product