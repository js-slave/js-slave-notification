const JSSlave	= require('js-slave-base');
const notifier	= require('node-notifier');

/**
 * Represent the category "Notification" for js-slave-manager.
 */
class JSSlaveNotification extends JSSlave {
	/**
	 * Create a JSSlaveNotification and define events/actions.
	 */
	constructor() {
		super();

		this.categoryName = 'Notification';

		this.addAction('Display', 'Display a notification', this.display, [
			{ name: 'title', description: 'The title of the notification', type: String },
			{ name: 'text', description: 'The text of the notification', type: String }
		]);
	}

	/**
	 * Display a system notification
	 * @param {UserParameters} parameters - An instance of UserParameters which contains the title/text of the notification.
	 */
	display(parameters) {
		const title = parameters.get('title');
		const text = parameters.get('text');

		if (title) {
			notifier.notify({
				title: title,
				message: text
			});
		} else {
			notifier.notify(text);
		}
	}
}

module.exports = JSSlaveNotification;
