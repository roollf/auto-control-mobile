import AsyncStorage from "@react-native-async-storage/async-storage"

class StorageService {
  private static instance: StorageService

  private constructor() {}

  public static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService()
    }
    return StorageService.instance
  }

  public async saveItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.error("Error saving item to AsyncStorage: ", error)
    }
  }

  public async getItem(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key)
    } catch (error) {
      console.error("Error getting item from AsyncStorage: ", error)
      return null
    }
  }

  public async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error("Error removing item from AsyncStorage: ", error)
    }
  }

  public async clearStorage(): Promise<void> {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error("Error clearing AsyncStorage: ", error)
    }
  }
}

export const storageService = StorageService.getInstance()
