// MODULES

// COMPONENTS

// STYLE
import './style/Watch.scss'

function Watch() {
  return (
    <div className='Watch'>
      <h2>WHERE TO WATCH?</h2>
      <section>
        <a href="https://f1tv.formula1.com/" target='_BLANK'>
          <img src="/assets/watch/f1.png"/>
        </a>
        <a href="https://www.skysports.com/f1" target='_BLANK'>
          <img src="/assets/watch/sky.png"/>
        </a>
        <a href="https://www.starplus.com/es-pa?cid=DSS-Search-Google-71700000086827953-&s_kwcid=AL!8468!3!657206952943!e!!g!!f1%20star%20plus&gclid=CjwKCAjw8symBhAqEiwAaTA__PcrEvzi6FcIieNwKrAviGgCSWMCHi3V-Zm0keh7Kd0BImQYaZXubBoCJwwQAvD_BwE&gclsrc=aw.ds" target='_BLANK'>
          <img src="/assets/watch/star.png"/>
        </a>
      </section>
    </div>
  )
}

export default Watch