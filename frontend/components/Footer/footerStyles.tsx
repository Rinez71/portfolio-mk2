import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	footer: {
		width: '100%',
        height: '100px',
		borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
	},
    footerLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
}));

export default useStyles;


// .footer {
//     width: 100%;
//     height: 100px;
//     border-top: 1px solid #eaeaea;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .footer a {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-grow: 1;
//   }