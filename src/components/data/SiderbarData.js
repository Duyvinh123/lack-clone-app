import MessageIcon from '@material-ui/icons/Message'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleIcon from '@material-ui/icons/People'
import MoreIcon from '@material-ui/icons/More'



export const sidebarItems = [
    {
        icon: <MessageIcon style={{color:'#ff5500'}} />,
        text: 'Thread'
    },
    {
        icon: <InboxIcon style={{color:'#ff5500'}} />,
        text: 'All DMs'
    },
    {
        icon: <DraftsIcon style={{color:'#ff5500'}} />,
        text: 'Mentions & Reactions'
    },
    {
        icon: <BookmarkBorderIcon style={{color:'#ff5500'}} />,
        text: 'Save Items'
    },
    {
        icon: <PeopleIcon style={{color:'#ff5500'}} />,
        text: 'Peoples & Group'
    },
    {
        icon: <MoreIcon style={{color:'#ff5500'}} />,
        text: 'More'
    }


]