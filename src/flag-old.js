  var root = new Firebase('https://timkay.firebaseio.com/flags');
    var selected = 'red';

    function set(row, col, val) {
        if (selected === 'off') {
            root.child('led/' + row + '-' + col).set(null);
        } else if (selected === 'dim') {
            root.child('led/' + row + '-' + col).transaction(function (was) {
                var kd = was.split(' ');
                if (kd[1] === 'dim') return kd[0];
                return kd[0] + ' ' + selected;
            });
        } else {
            root.child('led/' + row + '-' + col).set(val);
        }
    }

    function update(snapshot) {
        var key = snapshot.key();
        var val = snapshot.val();
        var rc = key.split(/-/);
        var kd = val.split(' ');
        $('td[data-row=' + rc[0] + '][data-col=' + rc[1] + ']').css({background: kd[0], opacity: (kd[1] === 'dim'? .1: 1)});
    }

    function remove(snapshot) {
        var key = snapshot.key();
        var val = snapshot.val();
        var rc = key.split(/-/);
        $('td[data-row=' + rc[0] + '][data-col=' + rc[1] + ']').css({background: '#ccc'});
    }

    root.child('led').on('child_added', update);
    root.child('led').on('child_changed', update);
    root.child('led').on('child_removed', remove);

    function table(content) {
        var data = '';
        for (var i = 0; i < 13; i++) {
            data += '<tr>';
            for (var j = 0; j < 24; j++) {
                if (content) {
                    var style = 'background: gray;';
                    var led = content['' + i + '-' + j];
                    if (led) {
                        var part = led.split(' ');
                        style = 'background: ' + part[0] + ';';
                        if (part[1] === 'dim') {
                            style += 'opacity: .2;';
                        }
                    }
                    data += '<td style="' + style + '"></td>';
                } else {
                    data += '<td data-row=' + i + ' data-col=' + j + '></td>';
                }
            }
            data += '</tr>\n';
        }
        return data;
    }
    $('#flag').append(table());

    $('#palette li').click(function (event) {
        selected = $(event.target).attr('value')
        $('#selected').html(selected);
        $('#palette option:selected').prop('selected', false);
    });

    var down = false;

    $('td').mousedown(function (event) {
        down = true;
        var row = $(event.target).attr('data-row');
        var col = $(event.target).attr('data-col');
        set(row, col, selected);
    });

    $('td').mouseover(function (event) {
  if (down) {
            var row = $(event.target).attr('data-row');
            var col = $(event.target).attr('data-col');
            set(row, col, selected);
        }
    });

    $('body').mouseup(function () {
  down = false;
    });

    function save() {
        root.child('led').once('value', function (snapshot) {
            root.child('saves').push(snapshot.val());
        });
    }

    function load(key) {
        root.child('saves').child(key).once('value', function (snapshot) {
            root.child('led').set(snapshot.val());
        });
    }

    root.child('saves').on('child_added', function (snapshot) {
        var key = snapshot.key();
        var data = table(snapshot.val());
        $('ul#saves').prepend('<li id="' + key + '">' + key + '<table>' + data + '</table>'
            + ' <a href="javascript:remove(\'' + key + '\');">remove</a>'
            + ' <a href="javascript:load(\'' + key + '\');">load</a></li>'
            + '<br/><br/>'
            );
    });

    function remove(key) {
        if (confirm('Remove this design?')) {
            root.child('saves').child(key).set(null);
            $('#' + key).remove();
        }
    }to