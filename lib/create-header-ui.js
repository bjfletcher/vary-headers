import model from './model';
import createHeaderInput from './create-header-input';
import createImportUi from './import-ui';

export default profileId => {
	
	const profiles = model.profiles() || [];
	let profile;

	document.querySelector('[data-headers]').innerHTML = '';
	
	if (!profileId) {
		const newId = profiles[profiles.length - 1] ? parseInt(profiles[profiles.length - 1].id) + 1 : 1;
		model.active(newId);
	} else {
		profile = model.profile(profileId);
	}

	if (document.querySelector('[data-import-panel]').classList.contains('import--reveal')) {
		createImportUi()
	}
	
	if (profile && profile.title) {
		document.querySelector('[data-profile-name]').value = profile.title;
	} else {
		document.querySelector('[data-profile-name]').value = '';
	}

	if (profile && profile.headers) {
		profile.headers.forEach(header => {
			createHeaderInput(header);
		});
	} else {
		createHeaderInput();
	}
};
