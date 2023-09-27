import styled from "styled-components";
import {formatCurrency} from "../../utils/helpers.js";
import CreateCabinForm from "./CreateCabinForm.jsx";
import {useDeleteCabin} from "./useDeleteCabin.js";
import {HiSquare2Stack} from "react-icons/hi2";
import {HiPencil, HiTrash} from "react-icons/hi";
import {useCreateCabin} from "./useCreateCabin.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";

const Img = styled.img`
	display: block;
	width: 6.4rem;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	object-position: center;
	transform: scale(1.5) translateX(-7px);
	margin-left: 8px;
	border-radius: 3px;
`;

const Cabin = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: "Sono", serif;
`;

const Price = styled.div`
	font-family: "Sono", serif;
	font-weight: 600;
`;

const Discount = styled.div`
	font-family: "Sono", serif;
	font-weight: 500;
	color: var(--color-green-700);
`;

export default function CabinRow({cabin}) {
	const {isDeleting, deleteCabin} = useDeleteCabin();
	const {createCabin} = useCreateCabin();

	const {id: cabinId, name, maxCapacity, regularPrice, description, discount, image} = cabin;

	function handleDuplicate() {
		createCabin({name: `Copy of ${name}`, maxCapacity, regularPrice, description, discount, image});
	}

	return (
		<Table.Row>
			<Img src={image} />
			<Cabin>{name}</Cabin>
			<div className="maxCapacity">Fits up to {maxCapacity} guests</div>
			<Price className="price">{formatCurrency(regularPrice)}</Price>
			{discount ? (
				<Discount className="discount">{formatCurrency(discount)}</Discount>
			) : (
				<span>&mdash;</span>
			)}
			<div>
				<Modal>
					<Menus.Menu data-test-id={`toggle-button-${name}`}>
						<Menus.Toggle id={cabinId} />

						<Menus.List id={cabinId}>
							<Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
								Duplicate
							</Menus.Button>

							<Modal.Open opens="edit">
								<Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
							</Modal.Open>

							<Modal.Open opens="delete">
								<Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
							</Modal.Open>
						</Menus.List>

						<Modal.Window name="edit">
							<CreateCabinForm cabinToEdit={cabin} />
						</Modal.Window>

						<Modal.Window name="delete">
							<ConfirmDelete
								resourceName="cabins"
								disabled={isDeleting}
								onConfirm={() => deleteCabin(cabinId)}
							/>
						</Modal.Window>
					</Menus.Menu>
				</Modal>
			</div>
		</Table.Row>
	);
}
