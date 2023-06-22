import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from "@mui/material"

export default function ProductCard({image='https://picsum.photos/id/0/300/136', alt='Random', title='title', price='price', time='recently', desc='desc' }) {
    return (
        <Box sx={{ width: '23%', minWidth: '250px', height: '272px', margin:'1%'}}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='136'
                        image={image}
                        alt={alt}
                    />
                    <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
                        <Typography variant='h5' component='div' sx={{ padding: 0 }}>
                            {title}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {price}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {time}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}
