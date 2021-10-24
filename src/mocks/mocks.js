import { setupWorker, rest} from 'msw';

const worker = setupWorker(
    rest.get('/api/data', (request, result, context) => {
        return result(context.json({
            gadgets: [
                {
                    id: 1,
                    title: 'Робот Пылесос',
                    url: 'https://s3-alpha-sig.figma.com/img/29af/ec4d/987d6451abbf0a5f2103bd152d5d48ee?Expires=1635724800&Signature=evtT~FRNy9PJl8o8heq8DC-k8gY48umy9ZgyXuOkOlXdHZB05kK1AprgoEKgELxRyS~v~aqhDPAFSqJshWfF8y7j4NImgT8nNFpL7Id1-2Db6W2Xx6~s4wfJqN3dcebiecXmbuIiHk00HWrivP~2cszUOzHQjKJbK91Z-BZ-KG9M9OoCr~2JwEqRdhrBHvOVgQQPIGdLwppy09cz62R4G8iAdajwCVttgzzwoq36s2fyT6~Ic5-Dxt5MEKjSJXtRD1C17rmEEixU-a1Rngaf1qgf3ppXs-5YW57z6B7b1LtWOoothZbKEuASfPUElpCVj6B3reBNXLsAdhST32-yaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    isOnline: true,
                    workingTime: `03:12:16`,
                    workingStatus: true,
                    workingMessage: 'Работает',
                    alertMessage: 'Выключен',
                    showStatus: false
                },
                {
                    id: 2,
                    title: 'Датчик газа',
                    url: 'https://s3-alpha-sig.figma.com/img/43bd/79af/36c4aae1d8aa3d6016489a84804df190?Expires=1635724800&Signature=H7MFzy~yV2ZXYJc1b~x1lPgrgaRslJ8AoW5OJt7xnRpVXwMN6kwDC2wZwk9erW7QZ1szx6TOSuZs20gLCEn0~9VSRyCTvjOmJ-peTATuLL5SkGcllA8aAIB4lV~EZ0SrYF7jWHUe4OHOBnFn1Zi~gN8SAME1bW8DyDaXRz5uzQG6mfpbukZgWnE-akwAbPNR0mDja~LRcIZmsNgFWivzBpfj4Mqz41EInGpei63ejr83dAJpgTnjY76cI7S46F~s9zE~jOtz0AKzX0DoroVIeNfqDgKIH0bFqNYiTotnj8YRQTAAHCHrLwVXtjUMR1MK8FOmKIip~sfrskZz4gKa9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    isOnline: false,
                    workingTime: `00:00:00`,
                    workingStatus: true,
                    workingMessage: 'газ не обнаружен',
                    alertMessage: 'обнаружен газ!',
                    showStatus: false
                },
                {
                    id: 3,
                    title: 'Освещение квартиры',
                    url: 'https://cdn.pixabay.com/photo/2019/03/13/14/07/light-4052946_1280.png',
                    isOnline: false,
                    workingTime: `00:00:00`,
                    workingStatus: true,
                    workingMessage: 'освещение вкл.',
                    alertMessage: 'освещение выкл.!',
                    showStatus: false
                },
            ]
        }))
    })
)

worker.start()