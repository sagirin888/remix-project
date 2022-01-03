import { NightwatchBrowser } from 'nightwatch'
import EventEmitter from 'events'

class ModalFooterOKClick extends EventEmitter {
  command (this: NightwatchBrowser): NightwatchBrowser {
    this.api.waitForElementPresent('.modal-ok').perform((client, done) => {
      this.api.execute(function () {
        const elem = document.querySelector('.modal-ok') as HTMLElement

        elem.click()
      }, [], () => {
        done()
        this.emit('complete')
      })
    })
    return this
  }
}

module.exports = ModalFooterOKClick
