<script>
	function toggle() {
		window.document.body.classList.toggle('dark');
	}
</script>

<div class="inline-block align-middle">
	<div class="flex justify-end items-center space-x-2 mx-auto relative">
		<span>X</span>
		<div>
			<input type="checkbox" name="checkbox" id="checkbox" class="hidden" on:change={toggle} />
			<label for="checkbox" class="cursor-pointer">
				<div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
					<div class="w-4 h-4 bg-white rounded-full shadow switch-ball" />
				</div>
			</label>
		</div>
		<span>O</span>
	</div>
</div>

<style>
	#checkbox:checked + label .switch-ball {
		background-color: white;
		transform: translateX(20px);
		transition: transform 0.1s ease-in-out;
	}
</style>
