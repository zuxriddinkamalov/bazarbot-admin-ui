/*
 * Type
 */
export const SUCCESS_TYPE = `success`
export const INFO_TYPE = `info`
export const WARNING_TYPE = `warning`
export const DANGER_TYPE = `danger`

/*
 * Action types
 */
export const SNAKEBAR = 'SNAKEBAR'
export const SNAKEBAR_OPEN = `${SNAKEBAR}_OPEN`
export const SNAKEBAR_CLOSE = `${SNAKEBAR}_CLOSE`

/*
 * Action creators
 */
export const openSnakeBarAction = payload => {
  return {
    type: SNAKEBAR_OPEN,
    payload
  }
}

export const closeSnakeBarAction = () => {
  return {
    type: SNAKEBAR_CLOSE
  }
}
