import React from 'react'
import { useProduct } from '../../context/ProductContextProvider'
import { Button } from '@mui/material'

export default function CardsList() {
    const {addProduct, readProducts,products} = useProduct()

  return (
    <>
    <Button onClick={}>Add Product</Button>
    
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        
      </Modal>
    </>
  )
}
