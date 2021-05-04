import Vue from 'vue'
import { Plugins } from '@capacitor/core'

const { Toast, Network } = Plugins
export default function ({ app }, inject) {
  inject('toast', Toast)
  inject('network', Network)
}

Vue.prototype.Capacitor = Plugins

/*
  docs: https://lodash.com/docs
*/

import _ from 'lodash'

Vue.prototype._ = _

/*
  docs: https://github.com/goldfire/howler.js#documentation
*/

import { Howl, Howler } from 'howler'

Vue.prototype.Howl    = Howl
Vue.prototype.Howler  = Howler
/*
      TO-DO
add master volume
add system to change separated percentage
...
*/ 

Vue.prototype.$sounds = {
  _list:[],
  volume: 0.5,
  play(name, vol = false, loop=false){
    if(!this.get(name)) this.add(name)
    let aud = this.get(name)
    aud = aud.sound
    aud.volume(vol ? vol : this.volume)
    aud.loop(loop)
    aud.play()
    return aud
  },
  get(name){
    return _.find(this._list, { id: name })
  },
  add(name){
    this._list.push({
      id: name,
      sound: new Howl({
        src: [name]
      })
    })
  }
}


