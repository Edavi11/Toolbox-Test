import sinon from 'sinon';
import { expect } from 'chai';
import axiosClient from '../../src/handlers/axiosClient.js';
import { getFileData, getFilesListFromApi, processFileData } from '../../src/service/fileService.js';

describe('fileService', () => {

    afterEach(() => {
        sinon.restore();
    });

    it('should fetch the list of files', async () => {
        const mockFiles = ["file1.csv", "file2.csv"];
        const axiosStub = sinon.stub(axiosClient, 'get').resolves({ data: { files: mockFiles } });

        const files = await getFilesListFromApi();
        expect(files).to.deep.equal(mockFiles);
        expect(axiosStub.calledOnce).to.be.true;
    });

    it('should fetch file data', async () => {
        const mockFileData = 'file,text,number,hex\nfile1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765';
        const axiosStub = sinon.stub(axiosClient, 'get').resolves({ data: mockFileData });

        const fileData = await getFileData('file1.csv');
        expect(fileData).to.equal(mockFileData);
        expect(axiosStub.calledOnceWith(`/file/file1.csv`)).to.be.true;
    });

    it('should process file data correctly', () => {
        const mockFileData = 'file,text,number,hex\nfile1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile2.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5';
        const expectedOutput = [
            { text: "RgTya", number: 64075909, hex: "70ad29aacf0b690b0467fe2b2767f765" },
            { text: "AtjW", number: 6, hex: "d33a8ca5d36d3106219f66f939774cf5" }
        ];

        const result = processFileData(mockFileData);
        expect(result).to.deep.equal(expectedOutput);
    });

    it('should ignore invalid lines in file data', () => {
        const mockFileData = 'file,text,number,hex\nfile1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\nfile2.csv,,6,d33a8ca5d36d3106219f66f939774cf5';
        const expectedOutput = [
            { text: "RgTya", number: 64075909, hex: "70ad29aacf0b690b0467fe2b2767f765" }
        ];

        const result = processFileData(mockFileData);
        expect(result).to.deep.equal(expectedOutput);
    });
})