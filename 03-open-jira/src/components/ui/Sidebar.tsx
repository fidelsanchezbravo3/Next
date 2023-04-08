import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const Sidebar = () => {

    const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

  return (
    <Drawer anchor='left' open={ true } onClose={ () => console.log('Cerrando') }>
        <Box sx={{ width: 250 }}>
            <Box sx={{ padding: '5px 10px' }}>
                <Typography variant='h4'>Menú</Typography>
            </Box>
            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItemButton key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={ text }/>
                        </ListItemButton>
                    ))
                }
            </List>
            <Divider />
        </Box>
    </Drawer>
  )
}
