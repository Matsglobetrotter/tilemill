module.exports = {
    'port': 8889,
    'backend': 'couchdb',
    'couch_database': 'tilemill',
    'providers': ['directory', 's3'],
    'files': __dirname + '/files',
    'mapfile_dir': __dirname + '/files/.cache',
    'data_dir': __dirname + '/files/.cache',
    'export_dir': __dirname + '/files/output',
    // TODO: request-specific overrides
    'header_defaults': {
        'Expires': new Date(Date.now() +
            1000 // second
            * 60 // minute
            * 60 // hour
            * 24 // day
            * 365 // year
            )
    }
}
