import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Axios from 'axios';
import Icon from '../../components/Icon';
import Market from '../../components/Market';
import Star from '../../components/Star';
import webp from 'check-for-webp';

import * as loadScript from "simple-load-script";
import "babel-polyfill";

import "../../../static/css/product.css";


function Product(props) {
  const id = props.params.product;
  const [fruit, setFruit] = useState(JSON.stringify({foo: "bar", test: {example: "demo"}}));
  const [code, setCode] = useState("loading...");
  const [item, setItem] = useState({
    file: [""], 
    id: "123", 
    pid: "5", 
    quantity: "12", 
    package_human: "герметичный пакет", 
    country_human: "Австрия", 
    energy_value: "", 
    proteins: "", fats: "", carbohydrates: "", 
    shelf_life: "24", 
    storage_conditions: "", 
    sort_human: "Арабика", 
    arabic_percent: "100", 
    roast_human: "Средне-тёмная", 
    code: "9000400120446", 
    name: "Julius Meinl Espresso Gold Cafe Expert, 1000 г", 
    price: "930.00", 
    comments: "0",
    weight: "1000",
    text: "<p>Default description</p>"
  });
  const [categories, setCategories] = useState([{id:"5",name:"Кофе в зернах"},{id:"6",name:"lorem ipsum"}]);
  const [backImage, setBackImage] = useState('');
  const [modal, setModal] = useState(false);
  


  useEffect(() => {
    
    async function getToken() {
      const itemData = await Axios.get("https://api.kawa.app/api/catalog/item/"+id, {
        headers: {
          'Accept-Language': 'en'
        }
      })
        .then((result) => {
          setItem(result.data.item)
        },(error) => {
          setItem("bad response")
        })
        .catch(err => {
          // 
        })
        const categoriesData = await Axios.get("https://api.kawa.app/api/catalog/categories", {
          headers: {
            'Accept-Language': 'en'
          }
        })
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
            <p>Weight: {item.weight} р.</p>
            {
              item.pid === '3' || item.pid === '4'
                ? (function () {return (<p>Quantity: {item.quantity} шт.</p>)}())
                : ''
            }
            <p>Package: {item.package_human}.</p>
            <p>Manufacturer country: {item.country_human}</p>
            {
              item.energy_value
                ? (function () {return (<p>Energy value: {item.energy_value} kcal.</p>)}())
                : ''
            }
            {
              item.proteins && item.fats && item.carbohydrates
                ? (function () {return (<p>Nutritional value:<br/>&emsp;proteins — {item.proteins} г.<br/>&emsp;fats — {item.fats} г.<br/>&emsp;carbohydrates — {item.carbohydrates} g.</p>)}())
                : ''
            }
            {
              item.shelf_life
                ? (function () {return (<p>Shelf life: {item.shelf_life} mon.</p>)}())
                : ''
            }
            {
              item.storage_conditions
                ? (function () {return (<p>Storage conditions {item.storage_conditions} .</p>)}())
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
              <img src={item.file[0]} alt={item.name} className="img-fluid mx-auto image-product"
              />
              {
                item.file && item.file.length > 1
                ? (function () {
                    return(<>
                      <div className="dots">
                          {item.file.map((value,index)=><div key={index} className="dot"></div>)}
                      </div>
                    </>)
                  }())
                : ""
              }
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
              { item.pid > 7 ? '' : `Roast: ${item.roast_human}` }
              </div>
              <div className="code">SCU: {item.code}</div>
              <div className="price">
                <span />
                {Math.floor( item.price )} UAH
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
                  Reviews: {item.comments}
                </div>
                <div className="col-2 kawa-icon">
                  <Icon color="#48433b" icon="small-cart-in-catalog" size="30" />
                </div>
                <div className="col-5">
                  <div className="btnText">Buy now</div>
                </div>
              </div>
            </div>

            <div class="wrapper">
              <div class="accordion-header">
                Delivery and payments
                <Icon color="#302c23" icon="arrow-next" size="14" />
              </div>
              <div class="accordion-header">
                Other products
                <Icon color="#302c23" icon="arrow-next" size="14" />
              </div>
              <div class="accordion-header open">
                Description
                <Icon color="#302c23" icon="arrow-down" size="14" />
              </div>
              <div class="caption">
              {caption()}
              </div>
            </div>
            <div className="support">
              <div className="support-btn">
                <Icon icon="telephone" size="20px" color="#f8f8f8" />Have any questions?
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