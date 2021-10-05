import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import axios from 'axios';

import "../../../static/css/product.css";
// import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&subset=cyrillic";


function Product(props) {
  const id = props.params.product;
  // async asyncData({ $axios, params, error }) {
  //   try {
  //     const item = await $axios.$get(
  //       `https://api.kawa.app/api/catalog/item/${+params.id}`
  //     )
  //     const categories = await $axios.$get(
  //       'https://api.kawa.app/api/catalog/categories'
  //     )

  //     return {
  //       item: item.item,
  //       categories: categories.categories,
  //     }
  //   } catch (e) {
  //     console.log('errr', e)
  //     error({ message: 'not found', statusCode: 404 })
  //   }
  // }
  return (
    <>
      <div className="container" style={{color: 'black'}} >
        <div className="row">
          <div className="col-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-5 col-xl-4 bg">
            <div className="wrapper">
              <div className="share-icon">
                Иконка
              </div>
              <img src="item.file[0]" alt={'Item #' + id + ' image'} className="img-fluid mx-auto image-product"
              />
              <div v-if="countImg > 1" className="dots">
                <div v-for="dot in countImg" key="dot" className="dot"></div>
              </div>
              <h1>Item #{id} title</h1>
              <div className="desctiption">
                что-то про описание, категорию
              </div>
              <div className="roast">
              Обжарка
              </div>
              <div className="code">Код товара: </div>
              <div className="price">
                <span />
                111 грн
              </div>
              <div className="row no-gutters">
                <div className="col-5">
                  <client-only placeholder="Loading...">
                    Hmmmmm
                  </client-only>
                  <br />
                  Отзывов 222
                </div>
                <div className="col-2 kawa-icon">
                  Иконка
                </div>
                <div className="col-5">
                  <div className="btnText">Купить сейчас</div>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <div className="accordion-header">
                Доставка и оплата
                Иконка
              </div>
              <div className="accordion-header">
                Другие товары
                Иконка
              </div>
              <div className="accordion-header open">
                Описание
                Иконка
              </div>
              <div v-html="caption" className="caption"></div>
            </div>
            <div className="support">
              <div className="support-btn">
                ИконкаВозникли
                вопросы?
              </div>
            </div>
            Market
          </div>
        </div>
      </div>
    </>
  )
}

export default Product