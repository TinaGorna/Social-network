import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type PaginationPropsType = {
    totalCount: number
    onPageChanged: (pageNumber: number) => void
}

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '13px'
    },
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        color: 'white'
    },
});
