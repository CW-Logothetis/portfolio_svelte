<script>
 export let skill
</script>

<div class="flex-container">
	<div class="image-container">
		<img
		  width={skill.image.width}
		  title={skill.image.title}
		  alt={skill.image.alt}
		  src={skill.image.src}
		>
	</div>
	<div class="text-container">
		<p>{skill.skillName}</p>
	</div>
</div>

<style lang="scss">

  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
		flex-grow: 1;
		background-color: rgba(239, 246, 255, 0.54);
		box-shadow: var(--box-shadow);
		border-radius: 50%;
		height: 4lh;
		width: 4lh;
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

	img {
		max-width: 70%;
	}

	@media (min-width: 700px) {

		img {
			max-width: 100%;
		}
	}

</style>