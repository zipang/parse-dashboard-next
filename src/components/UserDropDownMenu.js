const UserdropDownMenu = () => (
	<div
		id="myDropdown"
		class="dropdownlist absolute bg-black text-white pin-r mt-3 p-3 overflow-auto z-30 invisible"
	>
		<a
			href="#"
			class="p-2 hover:bg-grey-darkest text-white text-sm no-underline hover:no-underline block"
		>
			<i class="fa fa-user fa-fw"></i> Profile
		</a>
		<a
			href="#"
			class="p-2 hover:bg-grey-darkest text-white text-sm no-underline hover:no-underline block"
		>
			<i class="fa fa-cog fa-fw"></i> Settings
		</a>
		<div class="border border-grey-darkest"></div>
		<a
			href="#"
			class="p-2 hover:bg-grey-darkest text-white text-sm no-underline hover:no-underline block"
		>
			<i class="fas fa-sign-out-alt fa-fw"></i> Log Out
		</a>
	</div>
);

export default UserdropDownMenu;
