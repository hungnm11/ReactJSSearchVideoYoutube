import React, {Component} from 'react';
import { Button, Icon, Modal } from 'react-materialize';

class FooterUI extends Component {
  render() {
    return (
      <div className="footer center">
        {/* <div className="center">Footer page</div> */}
        <Modal 
          header='2017'
          bottomSheet
          trigger={<Button>This Week </Button>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
      </div>
    )
  }
}

export default FooterUI;