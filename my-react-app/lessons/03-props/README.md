# 03 - Props and children

Props are read-only inputs. Define a props type, mark optional values with `?`, and
use a union when only specific values are valid. `ReactNode` describes children.

Exercise: add an optional typed `level` prop and render three different cards.
Done when invalid prop values fail typecheck and the child never mutates props.
