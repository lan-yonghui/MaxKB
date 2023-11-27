import { store } from '@/stores'
interface modelRequest {
  name: string
  model_type: string
  model_name: string
}

interface Provider {
  /**
   * 供应商代号
   */
  provider: string
  /**
   * 供应商名称
   */
  name: string
  /**
   * 供应商icon
   */
  icon: string
}

interface ListModelRequest {
  /**
   * 模型名称
   */
  name?: string
  /**
   * 模型类型
   */
  model_type?: string
  /**
   * 基础模型名称
   */
  model_name?: string
  /**
   * 供应商
   */
  provider?: string
}

interface Model {
  /**
   * 主键id
   */
  id: String
  /**
   * 模型名
   */
  name: string
  /**
   * 模型类型
   */
  model_type: string
  /**
   * 基础模型
   */
  model_name: string
  /**
   * 认证信息
   */
  credential: any
  /**
   * 供应商
   */
  provider: string
}
export type { modelRequest, Provider, ListModelRequest, Model }