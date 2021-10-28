import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import PostsTemplate from './PostsTemplate';

function Posts() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [posts, setPosts] = useState(
        [
            {
                avatar: 'U',
                user: 'Usama Usman',
                date: '27 October 2021',
                main: 'Dummy',
                Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus porro quidem laborum maiores? Reprehenderit ratione ipsum recusandae nihil? Alias saepe porro possimus eligendi accusantium odit, at voluptates mollitia vel.'

            },

            {
                avatar: 'A',
                user: 'Abdul Rafeh',
                date: '27 October 2021',
                main: 'Abdul Rafeh',
                Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus porro quidem laborum maiores? Reprehenderit ratione ipsum recusandae nihil? Alias saepe porro possimus eligendi accusantium odit, at voluptates mollitia vel.'
            },
            {
                avatar: 'J',
                user: 'Javed Ali',
                date: '27 October 2021',
                main: 'Javed Ali',
                Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus porro quidem laborum maiores? Reprehenderit ratione ipsum recusandae nihil? Alias saepe porro possimus eligendi accusantium odit, at voluptates mollitia vel.'

            },
        ]
    );

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="News Feed" value="1" />
                        <Tab label="My Posts" value="2" />

                    </TabList>
                </Box>
                <TabPanel value="1">
                    <PostsTemplate posts={posts} />
                </TabPanel>
                <TabPanel value="2">
                    <PostsTemplate posts={posts}  />
                </TabPanel>

            </TabContext>
        </Box>
    )
}

export default Posts
