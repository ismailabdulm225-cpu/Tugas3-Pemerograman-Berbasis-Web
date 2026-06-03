window.app.component('status-badge', {

    props: ['status'],

    computed: {

        badgeClass() {

            const s = this.status?.toLowerCase()

            if (s === 'aman')
                return 'status-aman'

            if (s === 'menipis')
                return 'status-menipis'

            if (s === 'kosong')
                return 'status-kosong'

            if (s === 'diproses')
                return 'status-proses'

            if (s === 'dalam perjalanan')
                return 'status-perjalanan'

            if (s === 'diterima')
                return 'status-diterima'

            return 'status-default'
        }
    },

    template: `
        <span :class="badgeClass">
            {{ status }}
        </span>
    `
})