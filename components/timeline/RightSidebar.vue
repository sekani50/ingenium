<template>
	<aside class="sidebar static right">
		<!-- <div class="widget">
			<h4 class="widget-title">Your Groups</h4>
			<ul class="ak-groups">
				<li>
					<figure><img src="/images/resources/your-group1.jpg" alt=""></figure>
					<div class="your-grp">
						<h5><a href="group-detail.html" title="">Good Group</a></h5>
						<a href="#" title=""><i class="icofont-bell-alt"></i>Notifilactions <span>13</span></a>
						<a href="group-feed.html" title="" class="promote">view feed</a>
					</div>
				</li>
				<li>
					<figure><img src="/images/resources/your-group2.jpg" alt=""></figure>
					<div class="your-grp">
						<h5><a href="group-detail.html" title="">E-course Group</a></h5>
						<a href="#" title=""><i class="icofont-bell-alt"></i>Notifilactions <span>13</span></a>
						<a href="group-feed.html" title="" class="promote">view feed</a>
					</div>
				</li>
			</ul>
		</div> -->
		<!-- Your groups -->
		<!-- <div class="widget">
			<h4 class="widget-title">Suggested Group</h4>
			<div class="sug-caro">
				<div class="friend-box">
					<figure>
						<img alt="" src="/images/resources/sidebar-info.jpg">
						<span>Members: 505K</span>
					</figure>
					<div class="frnd-meta">
						<img alt="" src="/images/resources/frnd-figure2.jpg">
						<div class="frnd-name">
							<a title="" href="#">Social Research</a>
							<span>@biolabest</span>

						</div>
						<a class="main-btn2" href="#" title="">Join Community</a>
					</div>
				</div>
				<div class="friend-box">
					<figure>
						<img alt="" src="/images/resources/sidebar-info2.jpg">
						<span>Members: 505K</span>
					</figure>
					<div class="frnd-meta">
						<img alt="" src="/images/resources/frnd-figure3.jpg">
						<div class="frnd-name">
							<a title="" href="#">Bio Labest Group</a>
							<span>@biolabest</span>

						</div>
						<a class="main-btn2" href="#" title="">Join Community</a>
					</div>
				</div>
			</div>
		</div> -->
		<!-- suggested group -->
		<div class="d-none widget">
			<h4 class="widget-title">Ask Research Question?</h4>
			<div class="ask-question">
				<i class="icofont-question-circle"></i>
				<h6>Ask questions in Q&A to get help from experts in your field.</h6>
				<a class="ask-qst" href="#" title="">Ask a question</a>
			</div>
		</div>
		<!-- ask question widget -->
		<!-- <div class="widget">
			<h4 class="widget-title">Explore Events <a class="see-all" href="#" title="">See All</a></h4>
		
			<div class="rec-events bg-blue">
				<i class="icofont-microphone"></i>
				<h6><a title="" href="#">The 3rd International Conference 2020</a></h6>
				<img alt="" src="/images/clock.png">
			</div>
		</div> -->
		<!-- event widget -->

		<div class="widget">
			<div class="ask-question">
				<h6>Grow your audience.</h6>
				<NuxtLink to="/explore" class="ask-qst"  title="">Explore</NuxtLink>
			</div>
		</div>
		<!-- CTA -->

		<div class="widget">
			<ComposeRecentEventWidget></ComposeRecentEventWidget>
		</div>
		<!-- recent events -->


		<div class="widget d-none">
			<span><i class="icofont-globe"></i> Sponsored</span>
			<ul class="sponsors-ad">
				<li>
					<figure><img src="/images/resources/sponsor.jpg" alt=""></figure>
					<div class="sponsor-meta">
						<h5><a href="#" title="">IQ Options Broker</a></h5>
						<a href="#" title="" target="_blank">www.iqvie.com</a>
					</div>
				</li>
				<li>
					<figure><img src="/images/resources/sponsor2.jpg" alt=""></figure>
					<div class="sponsor-meta">
						<h5><a href="#" title="">BM Fashion Designer</a></h5>
						<a href="#" title="" target="_blank">www.abcd.com</a>
					</div>
				</li>
			</ul>
		</div>
		<!-- sponsord -->

		<!-- expand network - connect matches widget -->
		<!-- <ComposeConnectPeopleWidget></ComposeConnectPeopleWidget> -->
		<!-- expand network - connect matches widget -->
	</aside>
</template>