import React from 'react'
import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'

export default function PokeBall({cartQuantity, isOpen, closeCart}) {
  return (
    <Offcanvas show={true} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>
            Cart
        </OffcanvasTitle>
      </OffcanvasHeader>
    </Offcanvas>
  )
}
