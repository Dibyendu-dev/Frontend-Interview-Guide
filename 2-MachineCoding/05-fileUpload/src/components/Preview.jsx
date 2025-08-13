

const Preview = ({fileDetail,onDelete}) => {
  return( 
  <div className="file-preview">
    <img src={URL.createObjectURL(fileDetail)} alt={fileDetail.name} className="thumbnail"/>
    <div className="file-info">
        <span className="file-name">{fileDetail.name}</span>
         <span className="file-size">{(fileDetail.size/1024).toFixed(2)}kb</span>
    </div>
    <button className="remove-btn" onClick={()=>onDelete(fileDetail.name)}>x</button>
  </div>
  )
};

export default Preview;
