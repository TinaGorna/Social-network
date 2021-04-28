import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
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

export default function Pagination(props: PaginationPropsType) {
    const classes = useStyles();
    const { items } = usePagination({
        count: props.totalCount,
    });

    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <button type="button" style={{ fontWeight: selected ? 'bold' : undefined, fontSize: '20px', marginRight: '7px' }} {...item} >
                                {page}
                            </button>
                        );
                    } else {
                        children = (
                            <button type="button" style={{ fontSize: '20px', marginRight: '7px' }} {...item} >
                                {type}
                            </button>
                        );
                    }

                    return <li key={index} onClick={(e) => {props.onPageChanged(page)}}>{children}</li>;
                })}
            </ul>
        </nav>
    );
}