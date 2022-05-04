const style = {
  header: {
    wr: {
      marginTop: '100px',
    },
    color: '#fff',
    width: '100%',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    chip: {
      margin: '15px 0',
      item: {
        position: 'relative',
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#fff',
        cursor: 'pointer',
        list: {
          top: '170px',
          position: 'absolute',
          background: 'rgb(33, 33, 33)',
          width: '150px',
          color: '#fff',
          span: {
            fontSize: '14px',
          },
        },
      },
    },
    item: {
      display: 'inline-block',
      padding: '20px 0px',
      fontSize: '14px',
      position: 'relative',
      cursor: 'pointer',
      color: '#ffffff80',
      textDecoration: 'none',
      marginRight: '30px',
      active: {
        display: 'inline-block',
        padding: '20px 0px',
        fontSize: '14px',
        position: 'relative',
        borderBottom: '1px solid #fff',
        cursor: 'pointer',
        color: '#fff',
        textDecoration: 'none',
        marginRight: '30px',
      },
    },
  },
};
export default style;
