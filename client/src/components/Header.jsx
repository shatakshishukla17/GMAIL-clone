import {AppBar, Toolbar, styled, InputBase, Box} from '@mui/material'
import {Menu as MenuIcon, Search, Tune, HelpOutline, SettingsOutlined, AppsOutlined, AccountCircleOutlined} from '@mui/icons-material'
import { gmailLogo } from '../constants/Constant'


const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
});


const SearchWrapper=styled(Box)({
    backgroundColor: '#EAF1FB',
    marginLeft: 80,
    borderRadius: 8,
    minWidth: 690,
    maxWidth:720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div':{
        width:'100%',
        padding:'0 10px'
    }
});


const OptionsWrapper=styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent: 'end',
    '& > svg':{
        marginLeft:20
    }
})


const Header=({toggleDrawer})=>{
    
    return(
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color='action' onClick={toggleDrawer}/>
                <img src={gmailLogo} alt="logo" style={{width: 110, marginLeft:15}} />
                <SearchWrapper>
                    <Search color='action'/>
                    <InputBase
                        placeholder='Search mail'
                    />
                    <Tune color='action'/>

                </SearchWrapper>
                <OptionsWrapper>
                    <HelpOutline color='action'/>
                    <SettingsOutlined color='action'/>
                    <AppsOutlined color='action' />
                    <AccountCircleOutlined color='action' />
                </OptionsWrapper>
                
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;