<script>
	import mailIcon from '$lib/assets/mail.svg'
</script>

<section class="demo-section">
	<div class="demo-content">
		<p class="demo-label">BEVEILIGDE BEWIJSLUIS</p>

		<h2>Versterk uw dossiers met betrouwbaar bewijs.</h2>

		<p class="demo-description">
			Plan een compacte demonstratie van Prologg voor uw kantoor of praktijkgroep.
		</p>

		<a class="demo-contact" href="mailto:frank.kloos@fonetic.studio">
			<span>frank.kloos@fonetic.studio</span>
			<img src={mailIcon} alt="" width="20" height="20" />
		</a>

		<p class="demo-note">
			Prologg for Legal · Forensische Keten van Bewijs · Ontwikkeld voor
			gespecialiseerde rechtspraktijken
		</p>
	</div>
</section>

<style>
	@font-face {
		font-family: 'Space Grotesk';
		src: url('../assets/SpaceGrotesk-VariableFont_wght.ttf') format('truetype');
		font-weight: 300 700;
		font-style: normal;
		font-display: swap;
	}

	.demo-section {
		background-color: #101010;
		color: #fff;
		font-family: 'Space Grotesk', sans-serif;
	}

	.demo-content {
		box-sizing: border-box;
		max-width: 900px;
		margin-inline: auto;
		padding: 72px 24px 56px;
		text-align: center;
	}

	.demo-label {
		margin: 0 0 24px;
		color: #b8b8b8;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0.12em;
	}

	h2 {
		max-width: 700px;
		margin-inline: auto;
		font-size: clamp(32px, 8vw, 48px);
		line-height: 1.15;
		text-wrap: balance;
	}

	.demo-description {
		max-width: 600px;
		margin: 24px auto 0;
		color: #dedede;
		font-size: 16px;
		line-height: 1.6;
	}

	.demo-contact {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 100%;
		min-height: 52px;
		margin-top: 32px;
		padding: 12px 16px;
		border-radius: 10px;
		background-color: #fff;
		color: #171717;
		font-size: 16px;
		font-weight: 600;
		text-decoration: none;
		overflow-wrap: anywhere;
	}

	.demo-contact:hover {
		background-color: #e8e8e8;
	}

	.demo-contact:focus-visible {
		outline: 3px solid #1688ec;
		outline-offset: 4px;
	}

	.demo-contact img {
		flex-shrink: 0;
	}

	.demo-note {
		margin: 40px 0 0;
		color: #aaa;
		font-size: 16px;
		line-height: 1.6;
	}

	@media (min-width: 700px) {
		.demo-content {
			padding-block: 100px 80px;
		}

		.demo-description {
			margin-top: 28px;
			font-size: 18px;
		}

		.demo-contact {
			width: auto;
			padding-inline: 24px;
		}
	}
</style>