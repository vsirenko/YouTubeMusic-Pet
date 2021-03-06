const style = {
  color: '#fff',
  item: {
    height: '49px',
    width: '100%',
    borderBottom: '1px solid #1D1D1D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '0px 8px 0px 8px',
    active: {
      height: '49px',
      width: '100%',
      borderBottom: '1px solid #1D1D1D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      background: 'rgb(29, 29, 29)',
      padding: '0px 8px 0px 8px',
      img: {
        width: '32px',
        borderRadius: '3px',
        marginRight: '30px',
      },
    },
    wr: {
      maxWidth: '350px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      pozition: 'relative',
    },
    text: {
      color: 'rgba(255, 255, 255, .7)',
      fontSize: '14px',
      wr: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: '14px',
        width: '200px',
      },
    },
    shadow: {
      position: 'absolute',
      width: '32px',
      height: '32px',
      background: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '3px',
      zindex: '10',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: '32px',
      borderRadius: '3px',
      marginRight: '30px',
    },
  },
};

export default style;
