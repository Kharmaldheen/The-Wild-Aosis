import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { styled } from "styled-components";

const StyledAddCabinButton = styled.div`
  z-index: 999;
`;

const StyledButton = styled.button`
  font-size: 1.4rem;
  border: none;
  border-radius: var(--border-radius-sm);

  box-shadow: var(--shadow-sm);
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);

  &:hover {
    background-color: var(--color-brand-700);
  }

  padding: 1.2rem 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
`;

function AddCabin() {
  return (
    <StyledAddCabinButton>
      <Modal>
        <Modal.Open opens="cabin-form">
          <StyledButton>Add new Cabin </StyledButton>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </StyledAddCabinButton>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         {!isOpenModal ? "Add new Cabin" : "Close"}
//       </Button>

//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
