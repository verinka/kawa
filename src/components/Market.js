import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return ''
    }

    if (/android/i.test(userAgent)) {
      return (
        <div class="market">
          <h3>Загрузить приложение</h3>
          <a href="https://play.google.com/store/apps/details?id=com.wrevery.kawa" target="_blank" >
            <img
              src="./../images/icons/icon_googleplay_footer.png"
              alt="google play market"
              class="img-fluid mx-auto"
            />
          </a>
          <a href="https://apps.apple.com/us/app/%D0%BAawa/id1469094683" target="_blank" >
            <img
              src="./../images/icons/icon_appstore_footer.png"
              alt="apple store"
              class="img-fluid mx-auto"
            />
          </a>
        </div>)
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return (
        <div class="market">
          <h3>Загрузить приложение</h3>
          <a
            href="https://apps.apple.com/us/app/%D0%BAawa/id1469094683"
            target="_blank"
          >
            <img
              src="./../images/icons/icon_appstore_footer.png"
              alt="apple store"
              class="img-fluid mx-auto"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.wrevery.kawa"
            target="_blank"
          >
            <img
              src="./../images/icons/icon_googleplay_footer.png"
              alt="google play market"
              class="img-fluid mx-auto"
            />
          </a>
        </div>
      )
    }

    return (
      <div v-else class="market">
        <h3>Загрузить приложение</h3>
        <a href="https://play.google.com/store/apps/details?id=com.wrevery.kawa" >
          <img
            src="./../images/icons/icon_googleplay_footer.png"
            alt="google play market"
            class="img-fluid mx-auto"
          />
        </a>
        <a
          href="https://apps.apple.com/us/app/%D0%BAawa/id1469094683" target="_blank" >
          <img
            src="./../images/icons/icon_appstore_footer.png"
            alt="apple store"
            class="img-fluid mx-auto"
          />
        </a>
      </div>
    )
  }
  return (
    <>
      <div>
        {getMobileOperatingSystem()}
      </div>
    </>
  )
}

export default Icon
