<script>
	// @ts-nocheck
	export let baseUrl;
	export let alt;
	export let className;
	export let loading;
</script>

<img
	src="{baseUrl}original.webp"
	srcset="
    {baseUrl}567w.webp 567w,
    {baseUrl}768w.webp 768w,
    {baseUrl}992w.webp 992w
    "
	sizes="(max-width: 567px) 567w,
    (max-width: 768px) 768w,
    (max-width: 992px) 992w"
	{alt}
	{loading}
	class={className}
/>

<style lang="scss" scoped>
	.circle {
		width: 100%;
		border-radius: 75%;
	}
	.image-container {
    width: 100%;
    height: 100%; /* 100% viewport height */
    display: flex;
    justify-content: center; /* Center the image horizontally */
    align-items: center; /* Center the image vertically */
    overflow: hidden; /* Ensure the image does not overflow its container */
  }
</style>
