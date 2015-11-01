import React from 'react';

export default React.createClass({
  
  savePic(){
    this.props.savePicture();
  },

  goBack(){
    this.props.backHome();
  },
  render() {
    return (
      <div>
        <div className="addDiv">
          <h1>Add A Photo</h1>
          <input type='text' placeholder = 'New Name' className='nameInput'/>
          <input type='text' placeholder='Image URL' className='imgInput'/>
          <textarea type='text' placeholder='Caption' className='captionInput'/>
        </div>
        <div className="btnClass">
          <button className="saveBtn" onClick={this.savePic}>Save</button>
          <button className="backBtn" onClick={this.goBack}>Back</button>
        </div>  
      </div>
    );
  }

});
