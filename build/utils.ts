/**
 * 将环境变量键值由字符串转换为正确类型
 */
export function wraperEnv(envConf: Recordable): ViteEnv {
  const result: any = {}
  Object.keys(envConf).forEach((key) => {
    const value = envConf[key]
    if (key == 'VITE_PORT') result[key] = parseInt(value)
    else if (value == 'true') result[key] = true
    else if (value == 'false') result[key] = false
    else result[key] = value
  })
  return result
}
