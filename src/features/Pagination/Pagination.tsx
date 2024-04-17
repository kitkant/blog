import React from 'react';
import styled from '@emotion/styled'

const Pagination = ({items, pageSize, currentPage, onPageChange} : any) => {

	const pagesCount = Math.ceil(items / pageSize); // 100/10

 if (pagesCount === 1) return null;
 const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	return (
		<Wrapper>
     <List >
       {pages.map((page) => (
         <ListItem
         className={ currentPage === page ? 'active' : ''}
           key={page}
           onClick={() => onPageChange(page)}
         >
           {page}
         </ListItem>
       ))}
     </List>
   </Wrapper>
	);
};

export default Pagination;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 50%;

  
`
const ListItem = styled.li`
cursor: pointer;
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  border-radius: 12px;
 
  border: 1px solid rgba(0,0,0);
}

&.active {
  border-radius: 12px;
  background-color: rgba(0,0,0,0.5);
  border: 1px solid rgba(0,0,0);
}
`
