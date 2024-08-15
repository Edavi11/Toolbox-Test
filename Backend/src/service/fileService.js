import axiosClient from '../handlers/axiosClient.js'

export const getFilesListFromApi = async () => {
  try {
    const response = await axiosClient.get('/files')
    return response.data.files
  } catch (error) {
    console.error('Error fetching files list:', error)
    throw error
  }
}

export const getFileData = async (fileName) => {
  try {
    const response = await axiosClient.get(`/file/${fileName}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching data for file ${fileName}:`, error)
    throw error
  }
}

export const processFileData = (fileData) => {
  const lines = fileData.split('\n').slice(1)
  const validLines = []

  for (const line of lines) {
    const [file, text, number, hex] = line.split(',')

    if (file && text && number && hex) {
      validLines.push({
        text,
        number: parseInt(number, 10),
        hex
      })
    }
  }

  return validLines
}
