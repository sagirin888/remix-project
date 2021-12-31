import { NightwatchBrowser } from 'nightwatch'
import EventEmitter from 'events'

class ModalFooterOKClick extends EventEmitter {
  command (this: NightwatchBrowser): NightwatchBrowser {
    this.api.waitForElementVisible('[data-id="fileSystem-modal-footer-ok-react"]').perform((client, done) => {
      this.api.execute(function () {
        const elem = document.querySelector('[data-id="fileSystem-modal-footer-ok-react"]') as HTMLElement

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
