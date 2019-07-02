define(function(){

	var anim = {
		//animEffect:
		animDuration: 5,
		animDelay: 0.5,
		animCurve: constants.ANIMATION_CURVE_EASEIN,
		animCallBacks: {
			animStarted: function(){},
			animEnded: function(){alert("done");}
		}
	};

	return {
		postShow: function(){

			this.view.revealButton.onTouchEnd = () => {
				this.view.greetingLabel.isVisible = false;
				this.view.greetingLabel.text = "ANIMATION_EFFECT_REVEAL";
				//This works on Android, but NOT on iOS
				anim.animEffect = constants.ANIMATION_EFFECT_REVEAL;
				this.view.greetingLabel.setVisibility(true, anim);

				//Adding this line solves the layout problem for the web channels.
				//this.view.forceLayout()
			};

			this.view.expandButton.onTouchEnd = () => {
				this.view.greetingLabel.isVisible = false;
				this.view.greetingLabel.text = "ANIMATION_EFFECT_EXPAND";
				//This animation does NOT work on Android NOR iOS.
				anim.animEffect = constants.ANIMATION_EFFECT_EXPAND;
				this.view.greetingLabel.setVisibility(true, anim);

				//Adding this line solves the layout problem for the web channels.
				//this.view.forceLayout()
			};
		},

		onNavigate: function(){
			this.view.postShow = this.postShow;
			this.view.greetingLabel.isVisible = false;
		}
	};
});
