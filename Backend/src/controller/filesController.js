import { getFileData, getFilesListFromApi, processFileData } from '../service/fileService.js'

export const getFilesData = async (req, res) => {
  try {
    const { fileName } = req.query

    const files = fileName ? [fileName] : await getFilesListFromApi()

    const filePromises = files.map(async (file) => {
      try {
        const fileData = await getFileData(file)
        const lines = processFileData(fileData)

        if (lines.length > 0) {
          return { file, lines }
        }
        return null
      } catch (error) {
        console.warn(`Error processing file ${file}, skipping...`)
        return null
      }
    })

    const results = await Promise.allSettled(filePromises)

    const successfulResults = results.filter(result => result.status === 'fulfilled' && result.value !== null).map(result => result.value)

    res.status(200).json(successfulResults)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' })
  }
}

export const getFilesList = async (req, res) => {
  try {
    const files = await getFilesListFromApi()
    res.status(200).json({ files })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch file list' })
  }
}