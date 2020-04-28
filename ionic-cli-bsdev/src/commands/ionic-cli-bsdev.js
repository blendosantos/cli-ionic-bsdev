const command = {
    name: 'ionic-cli-bsdev',
    run: async toolbox => {
        const { print } = toolbox

        print.success(' ____ ____      _            ')
        print.success('| __ ) ___|  __| | _____   __')
        print.success('|  _ \\___ \\ / _` |/ _ \\ \\ / /')
        print.success('| |_) |__) | (_| |  __/\ V /')
        print.success('|____/____/ \\__,_|\\___| \\_/')

        print.info('')
        print.success('Welcome to CLI IONIC BUILD (iOS and Android)   v0.0.1')

        print.info('')
        print.info('Run Android build: ')
        print.success('ionic-cli-bsdev --build=android --version=1.0.0')

        print.info('')
        print.info('Run iOS build: ')
        print.success('ionic-cli-bsdev --build=ios --version=1.0.0')

        print.info('')
        print.info('Configure Android build: ')
        print.success('ionic-cli-bsdev --cfg=android')

        print.info('')
        print.info('Configure iOS build: ')
        print.success('ionic-cli-bsdev --cfg=ios')

        print.info('')
        print.info('Replace Android icons: ')
        print.success('ionic-cli-bsdev PATH_ICONS --icon=android')

        print.info('')
        print.info('Replace iOS icons: ')
        print.success('ionic-cli-bsdev PATH_ICONS --icon=android')

        print.info('')
    }
}

module.exports = command